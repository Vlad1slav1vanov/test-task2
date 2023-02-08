import React from "react";

const InputComponent: React.FC = () => {
  const [value, setValue] = React.useState<string>('')
  const [prevValideValue, setPrevValidValue] = React.useState(0)
  const regexp = /^-?\d+(\.\d+)?$/;

  function debounce<Params extends any[]>(
    func: (...args: Params) => any,
    timeout: number,
  ): (...args: Params) => void {
    let timer: NodeJS.Timeout
    return (...args: Params) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func(...args)
      }, timeout)
    }
  }

  const validate = (text: string): boolean => {
    return regexp.test(text)
  }

  const changeValue = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(evt.target.value)

    const validateValue = () => {
      if (validate(evt.target.value)) {
        setPrevValidValue(Number(evt.target.value))
      } else {
        setValue(prevValideValue.toString())
      }
    }

    const debounceValidate = debounce(validateValue, 1000)
    debounceValidate()
  }

  return (
    <div>
      <input type="text" value={value} onChange={changeValue} />
    </div>
  )
}

export default InputComponent;