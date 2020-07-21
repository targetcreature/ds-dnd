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
    disabled?={false}
    onDrag?={() => console.log("dragging")}
    onHover?={(dropId) => console.log(dropId)}
    onDrop?={(dropId) => console.log(dropId || "no drop target")}
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
      className?="target"
      disabled?={false}
      onEnter?={(dragId) => console.log(dragId)}
      onExit?={() => console.log("exiting")}
    />
  </div>

</DNDProvider >
```
