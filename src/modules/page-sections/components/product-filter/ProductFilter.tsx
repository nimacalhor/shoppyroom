import { getProductList } from "@modules/product/store/actions/product-actions";
import { Category } from "@modules/category/libraries/category-types";
import useDeviceType from "@modules/general/libraries/device-type";
import { Brand } from "@modules/brand/libraries/brand-types";
import { useSelector, useDispatch } from "react-redux";
import hash from "@modules/general/libraries/hash";
import { RootState } from "@modules/rootReducer";
import { useState, useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid";
import dynamic from "next/dynamic";
import {
  Product,
  ProductCriteria,
} from "@modules/product/libraries/product-types";
import {
  Paging,
  Sorting,
  SORTING_TYPES,
} from "@modules/general/libraries/general-types";

const ProductPanel = dynamic(
    () => import("@modules/product/components/product-panel")
  ),
  ProductGrid = dynamic(
    () => import("@modules/product/components/product-grid")
  ),
  ProductHeading = dynamic(
    () => import("@modules/product/components/product-heading")
  ),
  Pagination = dynamic(() => import("@mui/material/Pagination")),
  ProductTitleImage = dynamic(
    () => import("@modules/product/components/product-title-image")
  ),
  PanelDialog = dynamic(
    () => import("@modules/product/components/panel-dialog")
  ),
  Button = dynamic(() => import("@mui/material/Button")),
  FilterIcon = dynamic(() => import("@mui/icons-material/FilterAlt"));

const ProductFilter = ({
  products,
  brandList,
  categoryList,
  productPaging,
  title,
  imageTitle,
  defaultLimit,
  defaultSorting,
  defaultCategory,
  defaultBrand,
}: {
  products: Product[] | null;
  brandList: Brand[] | null;
  categoryList: Category[] | null;
  productPaging: Paging | null;
  title: string;
  imageTitle?: "brand" | "category";
  defaultLimit?: number;
  defaultSorting?: SORTING_TYPES;
  defaultCategory?: number;
  defaultBrand?: number;
}) => {
  const [curPage, setCurPage] = useState<number | null>(
    productPaging ? productPaging.page : null
  );
  const [searchValue, setSearchValue] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string[] | null>(null);
  const [selectedCtg, setSelectedCtg] = useState<string[] | null>(null);
  const [selectedSorting, setSelectedSorting] = useState<SORTING_TYPES | null>(
    null
  );
  const [isFirstTime, setIsFirstTime] = useState<boolean>(true);
  const [dialogState, setDialogState] = useState<boolean>(false);
  const pageCount = productPaging
    ? Math.round(productPaging.total / productPaging.limit)
    : null;
  const deviceType = useDeviceType();
  const dispatch = useDispatch();

  const getCriteriaItem = function (
    dft: number | undefined,
    selected: string[] | null
  ): string[] | undefined {
    if (selected && selected !== undefined) return selected;
    if (dft !== undefined && dft >= 0) return [String(dft)];
    return undefined;
  };
  const getSorting = function (
    dft: SORTING_TYPES | undefined,
    selected: SORTING_TYPES | null
  ): Sorting | undefined {
    if (selected)
      return {
        ascending: true,
        expression: selected,
      };
    if (dft)
      return {
        ascending: true,
        expression: dft,
      };
    return undefined;
  };
  const criteria = useMemo<ProductCriteria>(
    () => ({
      limit: defaultLimit || 20,
      brandIds: getCriteriaItem(defaultBrand, selectedBrand),
      categoryIds: getCriteriaItem(defaultCategory, selectedCtg),
      paging: curPage || undefined,
      searchKeywords: searchValue || undefined,
      sorting: getSorting(defaultSorting, selectedSorting),
    }),
    [
      selectedBrand,
      selectedCtg,
      curPage,
      searchValue,
      selectedSorting,
      defaultLimit,
      defaultBrand,
      defaultCategory,
      defaultSorting,
    ]
  );

  const list = useSelector((state: RootState) =>
    state.product.list[hash(criteria)]
      ? state.product.list[hash(criteria)].items
      : products
  );
  const pending = useSelector((state: RootState) =>
    state.product.list[hash(criteria)]
      ? state.product.list[hash(criteria)].pending
      : false
  );
  const error = useSelector((state: RootState) =>
    state.product.list[hash(criteria)]
      ? state.product.list[hash(criteria)].error
      : false
  );

  const searchHandler = function (str: string) {
    setIsFirstTime(false);
    setSearchValue(str);
  };
  const brandChangeHandler = function (arr: (string | undefined)[]) {
    setIsFirstTime(false);
    // kind of BUG
    const result: string[] = arr
      .map(String)
      .filter((value) => value !== "undefined");
    setSelectedBrand(result);
  };
  const ctgChangeHandler = function (ctgArr: string[]) {
    setIsFirstTime(false);
    setSelectedCtg(ctgArr);
  };
  const sortingChangeHandler = function (sorting: SORTING_TYPES) {
    setIsFirstTime(false);
    setSelectedSorting(sorting);
  };
  const pageChangeHandler = function (_: any, newPage: number) {
    setIsFirstTime(false);
    setCurPage(newPage);
  };
  const dialogCloseHandler = () => setDialogState(false);
  const dialogOpenHandler = () =>
    deviceType.isMobileOrTablet && setDialogState(true);

  useEffect(() => {
    if (!isFirstTime) {
      dispatch(getProductList(criteria));
    }
  }, [criteria, dispatch, isFirstTime]);

  return (
    <Grid container sx={{ px: 4 }} spacing={1}>
      {deviceType.isScreen ? (
        <Grid item md={4} lg={3}>
          <ProductPanel
            onBrandChange={brandChangeHandler}
            onCtgChange={ctgChangeHandler}
            onSearchSubmit={searchHandler}
            brandList={brandList}
            categoryList={categoryList}
            categoryInit={
              defaultCategory !== undefined ? [defaultCategory.toString()] : undefined
            }
          />
        </Grid>
      ) : (
        <PanelDialog open={dialogState} onClose={dialogCloseHandler}>
          <ProductPanel
            onBrandChange={brandChangeHandler}
            onCtgChange={ctgChangeHandler}
            onSearchSubmit={searchHandler}
            brandList={brandList}
            categoryList={categoryList}
          />
        </PanelDialog>
      )}
      <Grid item md={8} lg={9}>
        {deviceType.isMobileOrTablet && (
          <Button
            variant="outlined"
            sx={{ m: 2 }}
            onClick={dialogOpenHandler}
            startIcon={<FilterIcon />}
          >
            filter
          </Button>
        )}
        <ProductHeading onChange={sortingChangeHandler} title={title} />
        {error ? (
          <h2>{error.message}</h2>
        ) : pending ? (
          <h2>loading ...</h2>
        ) : (
          <ProductGrid products={list} />
        )}
        {pageCount && curPage && (
          <Pagination
            sx={{ mt: 3, ml: 3 }}
            count={pageCount}
            page={curPage}
            variant="outlined"
            color="primary"
            shape="rounded"
            onChange={pageChangeHandler}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default ProductFilter;
