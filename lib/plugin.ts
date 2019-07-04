import { ExecutionScope, Hooks, PRContext } from "./autobot";

/**
 * Do not directly extend from this class unless you're
 * created a new category of plugin.
 */
export abstract class Plugin {
  abstract name: string;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public apply(...args: any[]) {
    throw new Error(`Plugin ${this.name} must have an apply method`);
  }
}

export abstract class AppPlugin extends Plugin {
  public static scope = ExecutionScope.App;
  abstract apply(hooks: Hooks): void;
}

export abstract class PullRequestPlugin extends Plugin {
  public static scope = ExecutionScope.PullRequest;
  abstract apply(hooks: Hooks[ExecutionScope.PullRequest], context: PRContext): void;
}

export type UninstantiatedPlugin = typeof AppPlugin | typeof PullRequestPlugin;