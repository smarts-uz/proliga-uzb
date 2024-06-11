// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDWy3GXn2mzd9e2xUaPdmu
// Component: E9xIRzzcNiyh

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

import { SliderWrapper } from "@plasmicpkgs/react-slick";
import { sliderHelpers as SliderWrapper_Helpers } from "@plasmicpkgs/react-slick";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: tDWy3GXn2mzd9e2xUaPdmu/projectcss
import sty from "./PlasmicInjuresEvent3.module.css"; // plasmic-import: E9xIRzzcNiyh/css

createPlasmicElementProxy;

export type PlasmicInjuresEvent3__VariantMembers = {};
export type PlasmicInjuresEvent3__VariantsArgs = {};
type VariantPropType = keyof PlasmicInjuresEvent3__VariantsArgs;
export const PlasmicInjuresEvent3__VariantProps = new Array<VariantPropType>();

export type PlasmicInjuresEvent3__ArgsType = {};
type ArgPropType = keyof PlasmicInjuresEvent3__ArgsType;
export const PlasmicInjuresEvent3__ArgProps = new Array<ArgPropType>();

export type PlasmicInjuresEvent3__OverridesType = {
  root?: Flex__<"div">;
  sliderCarousel?: Flex__<typeof SliderWrapper>;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultInjuresEvent3Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInjuresEvent3__RenderFunc(props: {
  variants: PlasmicInjuresEvent3__VariantsArgs;
  args: PlasmicInjuresEvent3__ArgsType;
  overrides: PlasmicInjuresEvent3__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "sliderCarousel.currentSlide",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0,

        refName: "sliderCarousel",
        onMutate: generateOnMutateForSpec("currentSlide", SliderWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
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
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___9Pm6
        )}
      >
        {"FIXTURES"}
      </div>
      {(() => {
        const child$Props = {
          arrows: false,
          autoplay: true,
          autoplaySpeed: 0,
          beforeChange: generateStateOnChangePropForCodeComponents(
            $state,
            "currentSlide",
            ["sliderCarousel", "currentSlide"],
            SliderWrapper_Helpers
          ),
          centerMode: true,
          className: classNames("__wab_instance", sty.sliderCarousel),
          cssEase: "linear",
          initialSlide: generateStateValueProp($state, [
            "sliderCarousel",
            "currentSlide"
          ]),
          ref: ref => {
            $refs["sliderCarousel"] = ref;
          },
          sliderScopeClassName: sty["sliderCarousel__slider"],
          speed: 5000
        };
        initializeCodeComponentStates(
          $state,
          [
            {
              name: "currentSlide",
              plasmicStateName: "sliderCarousel.currentSlide"
            }
          ],
          [],
          SliderWrapper_Helpers ?? {},
          child$Props
        );

        return (
          <SliderWrapper
            data-plasmic-name={"sliderCarousel"}
            data-plasmic-override={overrides.sliderCarousel}
            {...child$Props}
          >
            <div className={classNames(projectcss.all, sty.freeBox__g2GV1)}>
              <div className={classNames(projectcss.all, sty.columns__m9ClI)}>
                <div className={classNames(projectcss.all, sty.column__vBx1F)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rv2Qu
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__rPLsF)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5Mw7Q
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column___6Yt50)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eZs0J
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__lAmq)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vIhRm
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__qsPo1)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zv2VO
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__caOZ)}>
              <div className={classNames(projectcss.all, sty.columns__dFZc)}>
                <div className={classNames(projectcss.all, sty.column__c2Tu)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__trpXb
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__vnfX5)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__g5Kby
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column___58Nvj)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___9Zr8T
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column___9Y8F9)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__f3XtY
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column___0MTmK)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___1ZoPe
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__ar0T0)}>
              <div className={classNames(projectcss.all, sty.columns__vrnUq)}>
                <div className={classNames(projectcss.all, sty.column__mqUuq)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dqQkr
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__sjkLz)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mFtfw
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__v5YKq)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7BFbM
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__a2Uow)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dRGs3
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__pNfHt)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eZeby
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__jabc1)}>
              <div className={classNames(projectcss.all, sty.columns___0Hsml)}>
                <div className={classNames(projectcss.all, sty.column__faftR)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___2Cx9W
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column___13ZOc)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nRLq5
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__sj8Ev)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__nVfgg
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__mpQip)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__n2C0N
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
                <div className={classNames(projectcss.all, sty.column__wZkNn)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__d197C
                    )}
                  >
                    {"F30"}
                  </div>
                </div>
              </div>
            </div>
          </SliderWrapper>
        );
      })()}
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto"}
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"auto"}
        loading={"lazy"}
        src={{
          src: "/plasmic/proliga/images/logoSponsorMainPinkpng.png",
          fullWidth: 100,
          fullHeight: 40,
          aspectRatio: undefined
        }}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sliderCarousel", "img"],
  sliderCarousel: ["sliderCarousel"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sliderCarousel: typeof SliderWrapper;
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInjuresEvent3__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInjuresEvent3__VariantsArgs;
    args?: PlasmicInjuresEvent3__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInjuresEvent3__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInjuresEvent3__ArgsType,
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
          internalArgPropNames: PlasmicInjuresEvent3__ArgProps,
          internalVariantPropNames: PlasmicInjuresEvent3__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInjuresEvent3__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInjuresEvent3";
  } else {
    func.displayName = `PlasmicInjuresEvent3.${nodeName}`;
  }
  return func;
}

export const PlasmicInjuresEvent3 = Object.assign(
  // Top-level PlasmicInjuresEvent3 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sliderCarousel: makeNodeComponent("sliderCarousel"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicInjuresEvent3
    internalVariantProps: PlasmicInjuresEvent3__VariantProps,
    internalArgProps: PlasmicInjuresEvent3__ArgProps
  }
);

export default PlasmicInjuresEvent3;
/* prettier-ignore-end */
