import { useRouter } from 'next/router'

import { useTranslations } from 'next-intl'

const Id = () => {

  const router = useRouter()
  const { query: { id: pageId } } = router

  const t = useTranslations()

  return (

    <div>
      <h1>Page {pageId}</h1>
      <p>{t('page', { page: pageId })}</p>
    </div>

  )

}

export default Id

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ locale }) {
  const messages = await import(`../../locales/${locale}.json`)
  return {
    props: {
      messages: messages.common
    }
  }
}
