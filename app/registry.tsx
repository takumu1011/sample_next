'use client';

import React, { useState } from "react";
import { useServerInsertedHTML } from 'next/navigation';
import { createStyleRegistry, StyleRegistry } from "styled-jsx";

export default function StyledJsxRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    const [jsxStyleRegistry] = useState(() => createStyleRegistry());

    useServerInsertedHTML(() => {
        const styles = jsxStyleRegistry.styles();
        jsxStyleRegistry.flush();
        return <>{styles}</>
    });

    return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}