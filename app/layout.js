import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

export const metadata = {
  title: 'Weather App',
  description: 'A weather app using react/redux',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
