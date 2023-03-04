import chalk = require("chalk");

export enum LogState {
  ERROR,
  WARNNING,
  INFO,
  SUCCESS,
}

const colors: { [key in LogState]: typeof chalk.ForegroundColor } = {
  [LogState.ERROR]: "red",
  [LogState.WARNNING]: "yellow",
  [LogState.INFO]: "white",
  [LogState.SUCCESS]: "green",
};

export default class Logger {
  public static log(state: LogState, service: string, description: string) {
    console.log(chalk[colors[state]]("[" + service + "]") + ":", description);
  }
}
