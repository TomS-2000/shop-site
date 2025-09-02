import memolyaPoint from '../../assets/memolyaPointBlack.png';

const MemolyaPoints = ({points} : {points: number}) => {
  
    return (
        <div className="flex justify-between text-xl text-black font-bold bg-purple-100 p-2 px-3 rounded-lg">
				<p className="">Memolya-Points </p>
				<div className="flex gap-1 items-center">
					<p>+{Math.ceil(points)}</p>
					<img src={memolyaPoint} className="w-8 h-8 inline-block" alt="Points Icon" />
				</div>
            </div>
    )
}

export default MemolyaPoints