declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
    > & { title?: string }>;

    const src: string;
    export default src;
}

declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module "*.webp" {
    const value: any;
    export = value;
}

declare module "*.jpg" {
    const value: any;
    export = value;
}

declare module "*.png" {
    const value: any;
    export = value;
}
