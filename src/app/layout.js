import TanstackProvider from '@/config/providers/TanstackProvider'
import './globals.css'
// import {
//   franklinGothicBook,
//   franklinGothicDemiCond,
//   franklinGothicMediumCond,
// } from '@/utilities/fonts/fonts'

export const metadata = {
  title: 'Sports Agent Pro',
  title: {
    default: `Sports Agent Pro`,
    template: `%s - Sports Agent Pro`,
  },
  // description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // className={`${franklinGothicBook.variable} ${franklinGothicDemiCond.variable} ${franklinGothicMediumCond.variable}`}
    >
      <body>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  )
}
