import { useEffect, useState } from 'react';
import { OpenGraph } from '../type';
import { $ } from '../utils/util';

const useOpenGraph = () => {
  const [openGraphData, setOpenGraphData] = useState<OpenGraph | null>(null);

  const getOpenGraphInfo = async () => {
    const url = $('meta[property="og:url"]')?.getAttribute('content') ?? '';
    const image = $('meta[property="og:image"]')?.getAttribute('content') ?? '';
    const title =
      $('meta[property="og:title"]')?.getAttribute('content') ?? '정보 없음';
    const description =
      $('meta[property="og:description"]')?.getAttribute('content') ??
      '정보 없음';
    setOpenGraphData({ url, image, title, description });
  };

  useEffect(() => {
    getOpenGraphInfo();
  }, []);

  return { openGraphData };
};

export default useOpenGraph;
