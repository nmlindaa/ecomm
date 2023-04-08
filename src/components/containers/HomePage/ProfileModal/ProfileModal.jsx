/** @jsxImportSource @emotion/react */

import Button from 'components/atoms/Button'
import Modal from 'components/atoms/Modal'
import Typography from 'components/atoms/Typography'
import Field from 'components/Form/Field'
import TextInput from 'components/Form/TextInput'
import { bool, func } from 'prop-types'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {
  emailValidation,
  isRequiredValidation,
  nameValidation,
  phoneValidation,
} from 'utils/constants/validation'
import { ProfileCtx } from 'utils/providers/ProfileProvider'
import { profileModalStyle } from './ProfileModal.style'

const ProfileModal = ({ showModal, closeModal, saveProfile }) => {
  const { state } = useContext(ProfileCtx)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: state.profile,
  })

  const onSubmit = (profile) => {
    saveProfile(profile)
  }

  const name = register('name', nameValidation)

  const phone = register('phone', phoneValidation)

  const email = register('email', emailValidation)

  const address = register('address', isRequiredValidation('Address'))

  return (
    <Modal isShown={showModal} closeModal={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="title" textAlign="center" mt={16} mb={8}>
          Edit Profile
        </Typography>

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
          name="phone"
          label="Phone"
          id="phone"
          placeholder="Phone"
          errors={errors.phone}
          inputField={(props) => (
            <TextInput onChange={phone.onChange} ref={phone.ref} {...props} />
          )}
        />

        <Field
          name="email"
          label="Email"
          placeholder="Email"
          id="email"
          errors={errors.email}
          inputField={(props) => (
            <TextInput onChange={email.onChange} ref={email.ref} {...props} />
          )}
        />

        <Field
          name="address"
          id="address"
          placeholder="Address"
          label="Address"
          errors={errors.address}
          inputField={(props) => (
            <TextInput
              onChange={address.onChange}
              ref={address.ref}
              {...props}
            />
          )}
        />

        <div css={profileModalStyle.buttonWrapper}>
          <Button
            variant="secondary"
            onClick={() =>
              reset(state.profile, {
                keepErrors: true,
              })
            }
            disabled={!isDirty}
            isFullWidth
          >
            Reset
          </Button>
          <Button type="submit" disabled={!isDirty || !isValid} isFullWidth>
            Save
          </Button>
        </div>
      </form>
    </Modal>
  )
}

ProfileModal.propTypes = {
  showModal: bool.isRequired,
  closeModal: func.isRequired,
  saveProfile: func.isRequired,
}

export default ProfileModal
