import action10Img from '../../assets/action10.png'
import action20Img from '../../assets/action20.png'
import SaleTab from '../home/SaleTab';
import RecommendationTab from '../home/RecommendationTab';

const Home = () => {

	return (
		<section className='flex flex-col gap-5 md:gap-8'>
			<div className='flex gap-1 md:gap-10 lg:gap-16 justify-around'>
				<img src={action10Img} className='w-140 min-w-10' alt="Aktion 10%" />
				<img src={action20Img} className='w-140 min-w-10' alt="Aktion 20%" />
			</div>
			
			<SaleTab />
			<RecommendationTab />
			
		</section>
	)
}

export default Home