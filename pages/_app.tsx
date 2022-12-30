import '../styles/global.scss';

import type { AppProps } from 'next/app'
import { SiteLayout } from '../components/SiteLayout/SiteLayout'

export default function App({ Component, pageProps }: AppProps) {
	return <SiteLayout>
		<Component {...pageProps} />
	</SiteLayout>
}
