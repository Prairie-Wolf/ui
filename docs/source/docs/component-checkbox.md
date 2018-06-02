---
title: CheckBox
---
Multi-selection controls

## Examples

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/checkbox-example" scrolling="no" /></div>

```jsx
<CheckBox text="CheckBox" />
```

## States

### Disabled

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/checkbox-state-disabled" scrolling="no" /></div>

```jsx
<CheckBox text="CheckBox" disabled />
```

### Checked

<div><iframe style="width: 100%; margin: 0;" src="https://uiexplorer.blankapp.org/slices/checkbox-state-checked" scrolling="no" /></div>

```jsx
<CheckBox text="CheckBox" checked />
```

## API

### Props

Name | Description | Type | Optional value | Default
--- | --- | --- | --- | ---
`children` | - | string, element | - | -
`text` | - | string | - | Empty string ('')
`textStyle` | - | style | - | -
`disabled` | - | bool | - | `false`
`checked` | - | bool | - | `false`

### Events

Name | Description
--- | ---
`onCheckedChange` | -
