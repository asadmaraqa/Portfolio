import "react";


declare module 'react' {
    export interface HTMLAttributes<T> {
        name?: string;
    }
}
declare module 'react-scroll';