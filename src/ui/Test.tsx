import React from 'react'
import SuperButton from './common/Button/SuperButton'
import SuperCheckbox from './common/Checkbox/SuperCheckbox'
import SuperDebouncedInput from './common/DebouncedInput/SuperDebouncedInput'
import SuperEditableSpan from './common/EditableSpan/SuperEditableSpan'
import SuperInputText from './common/InputText/SuperInputText'
import SuperRadio from './common/Radio/SuperRadio'
import SuperRange from './common/Range/SuperRange'
import SuperSelect from './common/Select/SuperSelect'

export function Test() {
  return (
    <div>
      <SuperButton />
      <SuperCheckbox />
      <SuperDebouncedInput />
      <SuperEditableSpan />
      <SuperInputText />
      <SuperRadio />
      <SuperRange />
      <SuperSelect />
    </div>
  )
}