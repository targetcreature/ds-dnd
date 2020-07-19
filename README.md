# next-dnd
dead simple drag/drop for nextjs, requires `framer-motion` 

webpack:
```js
// next-config.js

const withDND = require('next-transpile-modules')(['next-dnd']);

module.exports = withDND();
```

usage:
```tsx
import {DNDProvider, Draggable, Drop} from "next-dnd"

<DNDProvider>

  <Draggable
    dragId="box"
    className?="box"
    onDrag?={() => console.log("dragging")}
    onHover?={(dropId) => console.log(dropId)}
    onDrop?={(dropId) => console.log(dropId || "no drop target")}
    zDelay?={200} /* set delay when returning z-index to initial */
    {
      ...motionProps
    }
  >
    Box
  </Draggable>
  
  <div>
    Target
    <Drop /* fills container */
      dropId="target"
      onEnter?={(dragId) => console.log(dragId)}
      onExit?={() => console.log("exiting")}
    />
  </div>

</DNDProvider >
```
