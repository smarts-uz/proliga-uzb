// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: EwVsXqDViOHx

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Navbar from "../../Navbar"; // plasmic-import: TKT8XnZtrLZi/component
import TextInput from "../../TextInput"; // plasmic-import: xwgFLXqL07mD/component
import Select from "../../Select"; // plasmic-import: bCMc_ebYmgPo/component
import PlayerAction from "../../PlayerAction"; // plasmic-import: oJ05rQ2UYoHy/component
import PlayerPickerRow from "../../PlayerPickerRow"; // plasmic-import: NaQtMjgilBY9/component
import SideBarMyTeam from "../../SideBarMyTeam"; // plasmic-import: 7ylFTnxhQETY/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariants_8Rmrqs5Mzp6I } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 8Rmrqs5Mzp6I/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicTeams2Market.module.css"; // plasmic-import: EwVsXqDViOHx/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: TfB627kbYt5s/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: BLgPkmgd4hOv/icon

createPlasmicElementProxy;

export type PlasmicTeams2Market__VariantMembers = {};
export type PlasmicTeams2Market__VariantsArgs = {};
type VariantPropType = keyof PlasmicTeams2Market__VariantsArgs;
export const PlasmicTeams2Market__VariantProps = new Array<VariantPropType>();

export type PlasmicTeams2Market__ArgsType = {};
type ArgPropType = keyof PlasmicTeams2Market__ArgsType;
export const PlasmicTeams2Market__ArgProps = new Array<ArgPropType>();

export type PlasmicTeams2Market__OverridesType = {
  root?: Flex__<"div">;
  navbar?: Flex__<typeof Navbar>;
  columns?: Flex__<"div">;
  column?: Flex__<"div">;
  textInput?: Flex__<typeof TextInput>;
  clubSelect?: Flex__<typeof Select>;
  type?: Flex__<typeof Select>;
  playerCount?: Flex__<typeof Select>;
  playerAction?: Flex__<typeof PlayerAction>;
  playerPickerRow?: Flex__<typeof PlayerPickerRow>;
  sideBarMyTeam?: Flex__<typeof SideBarMyTeam>;
};

export interface DefaultTeams2MarketProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTeams2Market__RenderFunc(props: {
  variants: PlasmicTeams2Market__VariantsArgs;
  args: PlasmicTeams2Market__ArgsType;
  overrides: PlasmicTeams2Market__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "clubSelect.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "not null"
      },
      {
        path: "type.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "playerCount.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    players: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "96bcfd12-123e-4ab6-af1b-2653e72ef171",
        userArgs: {
          pagination: [$state.playerCount.value]
        },
        cacheKey: `plasmic.$.${(() => {
          try {
            return undefined;
          } catch (e) {
            if (
              e instanceof TypeError ||
              e?.plasmicType === "PlasmicUndefinedDataError"
            ) {
              return "";
            }
            throw e;
          }
        })()}.$.96bcfd12-123e-4ab6-af1b-2653e72ef171.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    club: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "157523a8-a564-4845-81d4-23951d76d034",
        userArgs: {},
        cacheKey: `plasmic.$.157523a8-a564-4845-81d4-23951d76d034.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    clubName: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "36b50d85-4a34-4b1b-b4ce-c1c4d87b86b2",
        userArgs: {},
        cacheKey: `plasmic.$.36b50d85-4a34-4b1b-b4ce-c1c4d87b86b2.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    userTeam: usePlasmicDataOp(() => {
      return {
        sourceId: "8cdHi4ivRUEkK6qbegQevF",
        opId: "f2c281a8-38ed-48b3-ba38-e7231daa5b27",
        userArgs: {},
        cacheKey: `plasmic.$.f2c281a8-38ed-48b3-ba38-e7231daa5b27.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_8Rmrqs5Mzp6I()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_plasmic_rich_components_css.plasmic_tokens,
          sty.root
        )}
      >
        <Navbar
          data-plasmic-name={"navbar"}
          data-plasmic-override={overrides.navbar}
          className={classNames("__wab_instance", sty.navbar)}
        />

        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___0Z5Hv)}
        >
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__zKXtP
            )}
            component={Link}
            href={"https://www.plasmic.app/"}
            platform={"nextjs"}
          >
            {"Team"}
          </PlasmicLink__>
          <PlasmicLink__
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__fbk5W
            )}
            component={Link}
            href={"https://www.plasmic.app/"}
            platform={"nextjs"}
          >
            {"Points"}
          </PlasmicLink__>
        </Stack__>
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div
            data-plasmic-name={"column"}
            data-plasmic-override={overrides.column}
            className={classNames(projectcss.all, sty.column)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__xnBrl)}
            >
              <TextInput
                data-plasmic-name={"textInput"}
                data-plasmic-override={overrides.textInput}
                className={classNames("__wab_instance", sty.textInput)}
                color={"dark"}
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["textInput", "value"])(
                    (e => e.target?.value).apply(null, eventArgs)
                  );
                }}
                placeholder={"Search player"}
                showStartIcon={true}
                value={
                  generateStateValueProp($state, ["textInput", "value"]) ?? ""
                }
              />

              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__ehfxY
                )}
                component={Link}
                href={"https://www.plasmic.app/"}
                platform={"nextjs"}
              >
                {"FAVOURITES"}
              </PlasmicLink__>
              <Select
                data-plasmic-name={"clubSelect"}
                data-plasmic-override={overrides.clubSelect}
                className={classNames("__wab_instance", sty.clubSelect)}
                color={"clear"}
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["clubSelect", "value"])(
                    eventArgs[0]
                  );
                }}
                options={(() => {
                  const __composite = [
                    { value: null, label: null },
                    { label: null, value: null }
                  ];
                  __composite["0"]["value"] = $queries.club.data[0].id;
                  __composite["0"]["label"] = $queries.club.data[0].name;
                  __composite["1"]["label"] = "All";
                  __composite["1"]["value"] = "not null";
                  return __composite;
                })()}
                placeholder={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xuFjc
                    )}
                  >
                    {"TEAM"}
                  </div>
                }
                value={generateStateValueProp($state, ["clubSelect", "value"])}
              />

              <Select
                data-plasmic-name={"type"}
                data-plasmic-override={overrides.type}
                className={classNames("__wab_instance", sty.type)}
                color={"clear"}
                onChange={(...eventArgs) => {
                  generateStateOnChangeProp($state, ["type", "value"])(
                    eventArgs[0]
                  );
                }}
                options={(() => {
                  const __composite = [
                    { value: "option1", label: null },
                    { value: "option2", label: null },
                    { label: null }
                  ];
                  __composite["0"]["label"] = "Goalkeeper";
                  __composite["1"]["label"] = "Striker";
                  __composite["2"]["label"] = "Middle";
                  return __composite;
                })()}
                placeholder={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__wrDpJ
                    )}
                  >
                    {"POS."}
                  </div>
                }
                value={generateStateValueProp($state, ["type", "value"])}
              />

              <Select
                data-plasmic-name={"playerCount"}
                data-plasmic-override={overrides.playerCount}
                className={classNames("__wab_instance", sty.playerCount)}
                color={"clear"}
                onChange={async (...eventArgs: any) => {
                  ((...eventArgs) => {
                    generateStateOnChangeProp($state, ["playerCount", "value"])(
                      eventArgs[0]
                    );
                  }).apply(null, eventArgs);
                  (async value => {
                    const $steps = {};

                    $steps["refreshData"] = true
                      ? (() => {
                          const actionArgs = {
                            queryInvalidation: ["plasmic_refresh_all"]
                          };
                          return (async ({ queryInvalidation }) => {
                            if (!queryInvalidation) {
                              return;
                            }
                            await plasmicInvalidate(queryInvalidation);
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["refreshData"] != null &&
                      typeof $steps["refreshData"] === "object" &&
                      typeof $steps["refreshData"].then === "function"
                    ) {
                      $steps["refreshData"] = await $steps["refreshData"];
                    }
                  }).apply(null, eventArgs);
                }}
                options={(() => {
                  const __composite = [
                    { value: null, label: null },
                    { value: null, label: null },
                    { label: null }
                  ];
                  __composite["0"]["value"] = 15;
                  __composite["0"]["label"] = "15";
                  __composite["1"]["value"] = 25;
                  __composite["1"]["label"] = "25";
                  __composite["2"]["label"] = "All";
                  return __composite;
                })()}
                value={generateStateValueProp($state, ["playerCount", "value"])}
              />
            </Stack__>
          </div>
        </div>
        <PlayerAction
          data-plasmic-name={"playerAction"}
          data-plasmic-override={overrides.playerAction}
          className={classNames("__wab_instance", sty.playerAction)}
        />

        <div className={classNames(projectcss.all, sty.freeBox___7InD5)}>
          {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
            (() => {
              try {
                return $queries.players.data;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return [];
                }
                throw e;
              }
            })()
          ).map((__plasmic_item_0, __plasmic_idx_0) => {
            const currentItem = __plasmic_item_0;
            const currentIndex = __plasmic_idx_0;
            return (
              <PlayerPickerRow
                data-plasmic-name={"playerPickerRow"}
                data-plasmic-override={overrides.playerPickerRow}
                className={classNames("__wab_instance", sty.playerPickerRow)}
                firstImage={(() => {
                  try {
                    return currentItem.image;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                fsyp={`0${currentItem.FSYP}`}
                key={currentIndex}
                modalTitle={`Show player action${undefined}`}
                name={(() => {
                  try {
                    return currentItem.name;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return undefined;
                    }
                    throw e;
                  }
                })()}
                price={`0${currentItem.market_value}`}
              />
            );
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__iak4F)}>
          <SideBarMyTeam
            data-plasmic-name={"sideBarMyTeam"}
            data-plasmic-override={overrides.sideBarMyTeam}
            className={classNames("__wab_instance", sty.sideBarMyTeam)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "columns",
    "column",
    "textInput",
    "clubSelect",
    "type",
    "playerCount",
    "playerAction",
    "playerPickerRow",
    "sideBarMyTeam"
  ],
  navbar: ["navbar"],
  columns: [
    "columns",
    "column",
    "textInput",
    "clubSelect",
    "type",
    "playerCount"
  ],
  column: ["column", "textInput", "clubSelect", "type", "playerCount"],
  textInput: ["textInput"],
  clubSelect: ["clubSelect"],
  type: ["type"],
  playerCount: ["playerCount"],
  playerAction: ["playerAction"],
  playerPickerRow: ["playerPickerRow"],
  sideBarMyTeam: ["sideBarMyTeam"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  columns: "div";
  column: "div";
  textInput: typeof TextInput;
  clubSelect: typeof Select;
  type: typeof Select;
  playerCount: typeof Select;
  playerAction: typeof PlayerAction;
  playerPickerRow: typeof PlayerPickerRow;
  sideBarMyTeam: typeof SideBarMyTeam;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTeams2Market__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTeams2Market__VariantsArgs;
    args?: PlasmicTeams2Market__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTeams2Market__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTeams2Market__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTeams2Market__ArgProps,
          internalVariantPropNames: PlasmicTeams2Market__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTeams2Market__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTeams2Market";
  } else {
    func.displayName = `PlasmicTeams2Market.${nodeName}`;
  }
  return func;
}

export const PlasmicTeams2Market = Object.assign(
  // Top-level PlasmicTeams2Market renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    textInput: makeNodeComponent("textInput"),
    clubSelect: makeNodeComponent("clubSelect"),
    type: makeNodeComponent("type"),
    playerCount: makeNodeComponent("playerCount"),
    playerAction: makeNodeComponent("playerAction"),
    playerPickerRow: makeNodeComponent("playerPickerRow"),
    sideBarMyTeam: makeNodeComponent("sideBarMyTeam"),

    // Metadata about props expected for PlasmicTeams2Market
    internalVariantProps: PlasmicTeams2Market__VariantProps,
    internalArgProps: PlasmicTeams2Market__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicTeams2Market;
/* prettier-ignore-end */
