import * as S from './ProductInfo.styles';

import useOpenGraph from '../../service/useOpenGraph';

const ProductInfo = () => {
  const { openGraphData } = useOpenGraph();

  const moveToProductPage = () => {
    if (!openGraphData?.url) return;

    window.location.href = openGraphData.url;
  };

  return (
    <S.ProductInfo onClick={moveToProductPage}>
      {openGraphData ? (
        <>
          <S.Thumbnail src={openGraphData.image} alt='상품 미리보기' />
          <S.Divider></S.Divider>
          <S.Content>
            <S.Title>{openGraphData.title}</S.Title>
            <S.Description>{openGraphData.description}</S.Description>
          </S.Content>
        </>
      ) : (
        <div>상품정보를 불러오지 못했습니다.</div>
      )}
    </S.ProductInfo>
  );
};

export default ProductInfo;
