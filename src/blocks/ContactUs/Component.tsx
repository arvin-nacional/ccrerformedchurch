'use client'
import React, { useCallback, useState } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useForm, FormProvider } from 'react-hook-form'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'
import type { ContactUsBlock as ContactUsBlockType } from '@/payload-types'
import { fields } from '@/blocks/Form/fields'
import { getClientSideURL } from '@/utilities/getURL'
import { Button } from '@/components/ui/button'
import RichText from '@/components/RichText'

export type ContactUsProps = {
  className?: string
  title?: ContactUsBlockType['title']
  description?: ContactUsBlockType['description']
  getInTouchTitle?: ContactUsBlockType['getInTouchTitle']
  getInTouchDescription?: ContactUsBlockType['getInTouchDescription']
  address?: ContactUsBlockType['address']
  addressLine2?: ContactUsBlockType['addressLine2']
  phone?: ContactUsBlockType['phone']
  phoneHours?: ContactUsBlockType['phoneHours']
  email?: ContactUsBlockType['email']
  emailNote?: ContactUsBlockType['emailNote']
  serviceTimesTitle?: ContactUsBlockType['serviceTimesTitle']
  serviceTimes?: ContactUsBlockType['serviceTimes']
  formTitle?: ContactUsBlockType['formTitle']
  formDescription?: ContactUsBlockType['formDescription']
  form?: FormType
  backgroundColor?: ContactUsBlockType['backgroundColor']
}

export const ContactUsBlock: React.FC<ContactUsProps> = (props) => {
  const {
    className,
    title = 'Contact Us',
    description,
    getInTouchTitle = 'Get In Touch',
    getInTouchDescription,
    address,
    addressLine2,
    phone,
    phoneHours,
    email,
    emailNote,
    serviceTimesTitle = 'Service Times',
    serviceTimes = [],
    formTitle = 'Send Us a Message',
    formDescription,
    form: formFromProps,
    backgroundColor = 'bg-gray-50',
  } = props

  const {
    id: formID,
    confirmationMessage,
    confirmationType,
    redirect,
    submitButtonLabel,
  } = formFromProps || {}

  const formMethods = useForm({
    defaultValues: formFromProps?.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)
            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })
            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect
            if (url) router.push(url)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <section className={`py-16 ${backgroundColor || 'bg-gray-50'} ${className || ''}`}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
          {description && (
            <p className="text-gray-600 text-base max-w-2xl mx-auto">{description}</p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Get In Touch Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {getInTouchTitle && (
                <h3 className="text-lg font-bold text-gray-900 mb-2">{getInTouchTitle}</h3>
              )}
              {getInTouchDescription && (
                <p className="text-gray-600 text-sm mb-6">{getInTouchDescription}</p>
              )}

              <div className="space-y-4">
                {/* Address */}
                {(address || addressLine2) && (
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-yellow-700">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      {address && <p className="font-medium text-gray-900">{address}</p>}
                      {addressLine2 && <p className="text-gray-600 text-sm">{addressLine2}</p>}
                    </div>
                  </div>
                )}

                {/* Phone */}
                {phone && (
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-yellow-700">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{phone}</p>
                      {phoneHours && <p className="text-gray-600 text-sm">{phoneHours}</p>}
                    </div>
                  </div>
                )}

                {/* Email */}
                {email && (
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 mt-0.5 text-yellow-700">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-yellow-700">{email}</p>
                      {emailNote && <p className="text-gray-600 text-sm">{emailNote}</p>}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Service Times Card */}
            {serviceTimes && serviceTimes.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                {serviceTimesTitle && (
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{serviceTimesTitle}</h3>
                )}

                <div className="space-y-4">
                  {serviceTimes.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-0.5 text-yellow-700">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-yellow-700">{service.serviceName}</p>
                        <p className="text-gray-600 text-sm">{service.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {formTitle && <h3 className="text-lg font-bold text-gray-900 mb-2">{formTitle}</h3>}
            {formDescription && <p className="text-gray-600 text-sm mb-6">{formDescription}</p>}

            {formFromProps && (
              <FormProvider {...formMethods}>
                {!isLoading && hasSubmitted && confirmationType === 'message' && (
                  <RichText data={confirmationMessage} />
                )}
                {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}
                {error && (
                  <div className="text-red-600">{`${error.status || '500'}: ${error.message || ''}`}</div>
                )}
                {!hasSubmitted && (
                  <form id={formID} onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4 last:mb-0">
                      {formFromProps.fields?.map((field, index) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const Field: React.FC<any> =
                          fields?.[field.blockType as keyof typeof fields]
                        if (Field) {
                          return (
                            <div className="mb-6 last:mb-0" key={index}>
                              <Field
                                form={formFromProps}
                                {...field}
                                {...formMethods}
                                control={control}
                                errors={errors}
                                register={register}
                              />
                            </div>
                          )
                        }
                        return null
                      })}
                    </div>

                    <Button form={formID} type="submit" variant="default" className="w-full">
                      {submitButtonLabel || 'Send Message'}
                    </Button>
                  </form>
                )}
              </FormProvider>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
