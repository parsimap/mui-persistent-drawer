# Persistent Drawer

## Optional Arguments

| argument       | required | type       | default     | description                            |
|----------------|----------|------------|-------------|----------------------------------------|
| `scroll`       | false    | `boolean`  | `false`     | to have scroll in drawer               |
| `right`        | false    | `number`   | `undefined` | to move drawer to left                 |
| `width`        | true     | `number`   | `undefined` | to define width to drawer              |
| `top`          | false    | `number`   | `undefined` | to move drawer to bottom               |
| `onOpenChange` | false    | `function` | `undefined` | recognize when the drawer state change |

## Changelog

### Version: `1.0.5`

* The right property was added to a component to adapt that with another component on the right side of the main
  layout.
* The problem of is taken away button on page while parent own any position was resolved.
* The top property was added to a component.

### version: `1.0.6`

* The package name is renamed from mui-presistent-drawer to mui-persistent-drawer and corrected in the project.

## Usage

```tsx
import MuiPersistentDrawer from '@parsimap/MuiPersistentDrawer';

const App = () => {
  function handleOpenChange(state: boolean) {
    if (state) {
      // Drawer is opend 
    }
  }

  return <MuiPersistentDrawer width={400} onOpenChange={handleOpenChange}/>
}

export default App;
```