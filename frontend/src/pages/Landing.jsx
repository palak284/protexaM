import Header from '../components/Header.jsx'
import Hero from '../components/Hero.jsx'
import Problem from '../components/Problem.jsx'
import Features from '../components/Features.jsx'
import Cta from '../components/Cta.jsx'
import Footer from '../components/Footer.jsx'

export default function Landing() {
	return (
		<div className="min-h-screen bg-gray-950 text-gray-100">
			<Header />
			<main>
				<Hero />
				<Problem />
				<Features />
				<Cta />
			</main>
			<Footer />
		</div>
	)
}
