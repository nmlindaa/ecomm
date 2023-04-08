/** @jsxImportSource @emotion/react */
import Button from 'components/atoms/Button'
import ButtonWrapper from 'components/atoms/ButtonWrapper'
import Field from 'components/Form/Field'
import PasswordInput from 'components/Form/PasswordInput'
import TextInput from 'components/Form/TextInput'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { redirect } from 'react-router'
import { nameValidation, passwordValidation } from 'utils/constants/validation'
import { ProfileCtx } from 'utils/providers/ProfileProvider'
import { loginStyle } from './LoginForm.style'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'all', defaultValues: { name: '', password: '' } })

  const { updateState, state } = useContext(ProfileCtx)

  const onSubmit = (data) => {
    updateState({
      isLoggedIn: true,
      status: 'completed',
      profile: { ...state.profile, name: data.name },
    })
    localStorage.setItem('name', data.name)
    redirect('/')
  }

  const name = register('name', nameValidation)

  const password = register('password', passwordValidation)

  return (
    <div css={loginStyle.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="name"
          label="Name"
          placeholder="Name"
          id="name"
          errors={errors.name}
          inputField={(props) => (
            <TextInput onChange={name.onChange} ref={name.ref} {...props} />
          )}
        />

        <Field
          id="password"
          name="password"
          label="Password"
          placeholder="Password"
          autoComplete="new-password"
          errors={errors.password}
          inputField={(props) => (
            <PasswordInput
              onChange={password.onChange}
              ref={password.ref}
              {...props}
            />
          )}
        />

        <ButtonWrapper>
          <Button type="submit" disabled={!isDirty || !isValid}>
            Login
          </Button>
        </ButtonWrapper>
      </form>
    </div>
  )
}

export default LoginForm
