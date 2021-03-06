# React TypeScript boilerplate

A VSCode extension containing snippets for modern React development in TypeScript with functional components and hooks. This extension is meant to be a non-intrusive way to accelerate frontend development in TypeScript, while maintaining explicit type definitions and best-practices for self-documenting TypeScript code.

The extension contains the following snippets for creating boilerplate code for React with TypeScript:

- `treact`: Stateless React Functional Component with no props
- `treactprops`: Stateless React Functional Component with props (interface)
- `treactprops type`: Stateless React Functional Component with props (type)
- `treactstate`: React Functional Component with props (interface), in addition to a derived state using useState and useEffect hooks
- `treactstate type`: React Functional Component with props (type), in addition to a derived state using useState and useEffect hooks
- `tstate`: React useState hook
- `teffect`: React useEffect hook
- `timport`: Import React, useState and useEffect
- `tcontext`: React Context with memoized state and Provider component
- `tcontext type`: React Context with memoized state and Provider component (type instead of interface)
- `tstyled`: Styled Components JSX element
- `tstyledcomp`: Styled Components wrapper for components (Material-UI etc.)

All snippets start with `t`, both in JavaScript and TypeScript for consistency, and in order for the snippets to not collide with other IntelliSense suggestions.

This extension also includes slightly modified versions of these snippets, without TypeScript constructs, for both `.js` and `.jsx` files.

Install from [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Magssch.react-typescript-boilerplate)

## Demo

![Snippets demo](https://media.giphy.com/media/QSFoVWNfXlEk2SL16S/giphy.gif)

## How to use

Create a new `.tsx` file and type `treact`. Choose your preferred boilerplate and press `enter`. The snippets contain multiple variables that can be customized in order to quickly setup a component. The first variable will always be the name of the component. Press `tab` to confirm the value of a variable and proceed to the next one.

## Snippet code expansions

#### treact

```
import React from 'react';

const {Name} = () => {
    return (
        <>
            {Body}
        </>
    );
};

export default {Name};

```

#### treactprops

```
import React from 'react';

interface {Name}Props {
    {Param}: {ParamType};
}

const {Name}: React.FC<{Name}Props> = ({ {Param} }) => {
    return (
        <>
            {Body}
        </>
    );
};

export default {Name};

```

#### treactprops type

```
import React from 'react';

type {Name}Props = {
    {Param}: {ParamType};
};

const {Name}: React.FC<{Name}Props> = ({ {Param} }) => {
    return (
        <>
            {Body}
        </>
    );
};

export default {Name};

```

#### treactstate

```
import React, { useState, useEffect } from 'react';

interface {Name}Props {
    {Param}: {ParamType};
}

const {Name}: React.FC<{Name}Props> = ({ {Param} }) => {
    const [{Attribute}, set{Attribute}] = useState<{ParamType}>({Param});
    useEffect(() => {
        set{Attribute}({Param});
    }, [{Param}]);

    return (
        <>
            {Body}
        </>
    );
};

export default {Name};

```

#### treactstate type

```
import React, { useState, useEffect } from 'react';

type {Name}Props = {
    {Param}: {ParamType};
};

const {Name}: React.FC<{Name}Props> = ({ {Param} }) => {
    const [{Attribute}, set{Attribute}] = useState<{ParamType}>({Param});
    useEffect(() => {
        set{Attribute}({Param});
    }, [{Param}]);

    return (
        <>
            {Body}
        </>
    );
};

export default {Name};

```

#### tstate

```
const [{Attribute}, set{Attribute}] = useState<{ParamType}>({DefaultVal});
```

#### teffect

```
useEffect(() => {
    {Body}
}, [{Param}]);
```

#### timport

```
import React, { useState, useEffect } from 'react';

```

#### tcontext

```
import React, { createContext, useState, useMemo } from 'react';

interface {Name}ContextType {
  {Name}: {ValueType};
  set{Name}: (value: {ValueType}) => void;
}

export const {Name}Context = createContext<{Name}ContextType>({
  {Name}: {DefaultValue},
  set{Name}: () => {},
});

const {Name}Provider: React.FC = ({ children }) => {
  const [{Name}, set{Name}] = useState<{ValueType}>({DefaultValue});
  const memoizedValue = useMemo(() => ({ {Name}, set{Name} }), [{Name}]);

  return (
    <{Name}Context.Provider
      value={{
        {Name}: memoizedValue.{Name},
        set{Name}: memoizedValue.set{Name},
      }}
    >
      {children}
    </{Name}Context.Provider>
  );
};

export default {Name}Provider;

```

#### tcontext type

```
import React, { createContext, useState, useMemo } from 'react';

type {Name}ContextType = {
  {Name}: {ValueType};
  set{Name}: (value: {ValueType}) => void;
};

export const {Name}Context = createContext<{Name}ContextType>({
  {Name}: {DefaultValue},
  set{Name}: () => {},
});

const {Name}Provider: React.FC = ({ children }) => {
  const [{Name}, set{Name}] = useState<{ValueType}>({DefaultValue});
  const memoizedValue = useMemo(() => ({ {Name}, set{Name} }), [{Name}]);

  return (
    <{Name}Context.Provider
      value={{
        {Name}: memoizedValue.{Name},
        set{Name}: memoizedValue.set{Name},
      }}
    >
      {children}
    </{Name}Context.Provider>
  );
};

export default {Name}Provider;

```

#### tstyled

```
const {ElementName} = styled.{ElementName}`
    {Body}
`;
```

#### tstyledcomp

```
const Styled{ComponentName} = styled({ComponentName})`
    {Body}
`;
```
