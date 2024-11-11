declare function createRemoteSSRComponent(
  props: CreateRemoteSSRComponentOptions,
): (props: ComponentType) => React.JSX.Element;

type CreateRemoteSSRComponentOptions = {
  loader: () => Promise<T>;
  loading: React.ReactNode;
  fallback: ErrorBoundaryPropsWithComponent['FallbackComponent'];
  export?: E;
};

type ComponentType = T[E] extends (...args: unknown) => unknown
  ? Parameters<T[E]>[0] extends undefined
    ? Record<string, never>
    : Parameters<T[E]>[0]
  : Record<string, never>;
