mod app;
mod commands;
mod enums;
mod helpers;

use crate::commands::bin::bin;
use crate::commands::ci::{ci, CiOptions};
use crate::commands::init::init;
use crate::commands::project::project;
use crate::commands::project_graph::project_graph;
use crate::commands::run::{run, RunOptions};
use crate::commands::setup::setup;
use crate::commands::teardown::teardown;
use app::{App, Commands};
use clap::Parser;
use console::Term;
use enums::LogLevel;
use moon_logger::{LevelFilter, Logger};
use moon_terminal::ExtendedTerm;
use std::env;

// This is annoying, but clap requires applying the `ArgEnum`
// trait onto the enum, which we can't apply to the log package.
fn map_log_level(level: LogLevel) -> LevelFilter {
    match level {
        LogLevel::Off => LevelFilter::Off,
        LogLevel::Error => LevelFilter::Error,
        LogLevel::Warn => LevelFilter::Warn,
        LogLevel::Info => LevelFilter::Info,
        LogLevel::Debug => LevelFilter::Debug,
        LogLevel::Trace => LevelFilter::Trace,
    }
}

pub async fn run_cli() {
    // Create app and parse arguments
    let args = App::parse();

    // Setup logging
    Logger::init(map_log_level(args.log_level));

    // Setup caching
    if env::var("MOON_CACHE").is_err() {
        env::set_var("MOON_CACHE", args.cache.to_string().to_lowercase());
    }

    // Match and run subcommand
    let result;

    match &args.command {
        Commands::Bin { tool } => {
            result = bin(tool).await;
        }
        Commands::Ci {
            base,
            head,
            job,
            job_total,
        } => {
            result = ci(CiOptions {
                base: base.clone(),
                head: head.clone(),
                job: *job,
                job_total: *job_total,
            })
            .await;
        }
        Commands::Init { dest, force } => {
            result = init(dest, *force).await;
        }
        Commands::Project { id, json } => {
            result = project(id, *json).await;
        }
        Commands::ProjectGraph { id } => {
            result = project_graph(id).await;
        }
        Commands::Run {
            target,
            affected,
            local,
            status,
            passthrough,
        } => {
            result = run(
                target,
                RunOptions {
                    affected: *affected,
                    local: *local,
                    status: status.clone(),
                    passthrough: passthrough.clone(),
                },
            )
            .await;
        }
        Commands::Setup => {
            result = setup().await;
        }
        Commands::Teardown => {
            result = teardown().await;
        }
    }

    if let Err(error) = result {
        Term::buffered_stderr().render_error(error);
    }
}
