// These are hardcoded header heights
// Cannot get height of hidden windows without possible performance issues
// These values will need updated if there are changes to the headers
export default class WindowConstants {
  static readonly WINDOW_HEADER_HEIGHT: number = 32;

  static readonly IE_WINDOW_HEADER_HEIGHT: number = 128;

  static readonly PORTFOLIO_WINDOW_WINDOW_ID = 'portfolio-window';

  static readonly HELP_WINDOW_WINDOW_ID = 'help-window';
}
