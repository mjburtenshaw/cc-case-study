import { useSnackbar as useNotistackSnackbar, OptionsObject } from "notistack";
import { windowUtils } from "../utils";

type DynamicAnchorOriginArgs = {
  limit: windowUtils.Breakpoint;
  xBreakpointAnchorIn: windowUtils.XAnchor;
  xBreakpointAnchorOut: windowUtils.XAnchor;
  yBreakpointAnchorIn: windowUtils.YAnchor;
  yBreakpointAnchorOut: windowUtils.YAnchor;
};

type SnackbarOptions = {
  dynamicAnchorOrigin?: DynamicAnchorOriginArgs;
};

const getDynamicAnchorOrigin = (args: DynamicAnchorOriginArgs) => {
  const xBreakpointAnchorRule =
    windowUtils.buildBreakpointAnchorRule<windowUtils.XAnchor>(
      args.xBreakpointAnchorIn,
      args.xBreakpointAnchorOut
    );
  const yBreakpointAnchorRule =
    windowUtils.buildBreakpointAnchorRule<windowUtils.YAnchor>(
      args.yBreakpointAnchorIn,
      args.yBreakpointAnchorOut
    );
  const dynamicAnchorOrigin = windowUtils.getDynamicAnchorOrigin(
    args.limit,
    xBreakpointAnchorRule,
    yBreakpointAnchorRule
  );
  return dynamicAnchorOrigin;
};

export function useSnackbar(snackbarOptions?: SnackbarOptions) {
  const { enqueueSnackbar } = useNotistackSnackbar();
  const dynamicAnchorOriginArgs = snackbarOptions?.dynamicAnchorOrigin;
  return {
    notify: (message: string, optionOverrides?: OptionsObject) => {
      let options: OptionsObject = {};
      if (dynamicAnchorOriginArgs) {
        const dynamicAnchorOrigin = getDynamicAnchorOrigin(
          dynamicAnchorOriginArgs
        );
        options.anchorOrigin = dynamicAnchorOrigin;
      }
      options = { ...options, ...optionOverrides };
      enqueueSnackbar(message, options);
    },
  };
}
