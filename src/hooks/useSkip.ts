import { useCallback, useEffect, useState } from 'react'

export const useSkip = (query: string) => {
	const [skip, setSkip] = useState<number>(0);
	const limit = 12;

	const getNextSite = useCallback(() => {
		setSkip(skip + limit);
		window.scrollTo(0, 0);
	}, [skip, limit]);

	const getPreviousSite = useCallback(() => {
		setSkip(Math.max(0, skip - limit));
		window.scrollTo(0, 0);
	}, [skip, limit]);

	useEffect(() => {
		setSkip(0);
	},[query]);

	return {skip, limit, getNextSite, getPreviousSite}
}

export default useSkip