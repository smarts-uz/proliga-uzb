// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3RdzzxYtXNDmXwthAFULht
// Component: 2PDU7zfjKvvU

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

import TextInput from "../../TextInput"; // plasmic-import: Lrr6q6EafLI7/component
import Button from "../../Button"; // plasmic-import: dwt2e_8l2G6M/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 3RdzzxYtXNDmXwthAFULht/projectcss
import sty from "./PlasmicAuth.module.css"; // plasmic-import: 2PDU7zfjKvvU/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: _qkSSM-Hh_sk/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 5E-obxmHF72A/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: _rPDvpvkM_d8/icon

createPlasmicElementProxy;

export type PlasmicAuth__VariantMembers = {};
export type PlasmicAuth__VariantsArgs = {};
type VariantPropType = keyof PlasmicAuth__VariantsArgs;
export const PlasmicAuth__VariantProps = new Array<VariantPropType>();

export type PlasmicAuth__ArgsType = {};
type ArgPropType = keyof PlasmicAuth__ArgsType;
export const PlasmicAuth__ArgProps = new Array<ArgPropType>();

export type PlasmicAuth__OverridesType = {
  root?: Flex__<"div">;
  emailInput?: Flex__<typeof TextInput>;
  passwordInput?: Flex__<typeof TextInput>;
  submitButton?: Flex__<typeof Button>;
};

export interface DefaultAuthProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAuth__RenderFunc(props: {
  variants: PlasmicAuth__VariantsArgs;
  args: PlasmicAuth__ArgsType;
  overrides: PlasmicAuth__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "emailInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "passwordInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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
        sty.root
      )}
    >
      <TextInput
        data-plasmic-name={"emailInput"}
        data-plasmic-override={overrides.emailInput}
        className={classNames("__wab_instance", sty.emailInput)}
        onChange={(...eventArgs) => {
          generateStateOnChangeProp($state, ["emailInput", "value"])(
            (e => e.target?.value).apply(null, eventArgs)
          );
        }}
        placeholder={"email"}
        type={"text"}
        value={generateStateValueProp($state, ["emailInput", "value"]) ?? ""}
      />

      <TextInput
        data-plasmic-name={"passwordInput"}
        data-plasmic-override={overrides.passwordInput}
        className={classNames("__wab_instance", sty.passwordInput)}
        onChange={(...eventArgs) => {
          generateStateOnChangeProp($state, ["passwordInput", "value"])(
            (e => e.target?.value).apply(null, eventArgs)
          );
        }}
        placeholder={"password"}
        type={"password"}
        value={generateStateValueProp($state, ["passwordInput", "value"]) ?? ""}
      />

      <Button
        data-plasmic-name={"submitButton"}
        data-plasmic-override={overrides.submitButton}
        className={classNames("__wab_instance", sty.submitButton)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "emailInput", "passwordInput", "submitButton"],
  emailInput: ["emailInput"],
  passwordInput: ["passwordInput"],
  submitButton: ["submitButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  emailInput: typeof TextInput;
  passwordInput: typeof TextInput;
  submitButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAuth__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAuth__VariantsArgs;
    args?: PlasmicAuth__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAuth__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAuth__ArgsType,
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
          internalArgPropNames: PlasmicAuth__ArgProps,
          internalVariantPropNames: PlasmicAuth__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAuth__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuth";
  } else {
    func.displayName = `PlasmicAuth.${nodeName}`;
  }
  return func;
}

export const PlasmicAuth = Object.assign(
  // Top-level PlasmicAuth renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    emailInput: makeNodeComponent("emailInput"),
    passwordInput: makeNodeComponent("passwordInput"),
    submitButton: makeNodeComponent("submitButton"),

    // Metadata about props expected for PlasmicAuth
    internalVariantProps: PlasmicAuth__VariantProps,
    internalArgProps: PlasmicAuth__ArgProps
  }
);

export default PlasmicAuth;
/* prettier-ignore-end */
