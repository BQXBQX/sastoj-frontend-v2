interface DeleteButtonProps {
    buttonTrigger: (onSuccess: () => void) => void;
    modelTitle: string;
    modalContent: string;
    children?: React.ReactNode;
}
export declare const ModalTitle: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const DeleteButton: (props: DeleteButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
