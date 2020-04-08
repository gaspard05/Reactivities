import React from 'react';
import { FormFieldProps, Form, Label } from 'semantic-ui-react';
import { DateTimePicker } from 'react-widgets';
import { FieldRenderProps } from 'react-final-form';

interface IProps extends FieldRenderProps<Date>, FormFieldProps {}

const DateInput: React.FC<IProps> = ({
  input,
  width,
  id = null,
  date = false,
  time = false,
  placeholder,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field error={touched && !!error} width={width}>
      <DateTimePicker
        placeholder={placeholder}
        value={input.value || null}
        date={date}
        time={time}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onKeyDown={e => e.preventDefault()}
        {...rest}
      />
      {touched && error && (
        <Label basic color="red">
          {error}
        </Label>
      )}
    </Form.Field>
  );
};
export default DateInput;
