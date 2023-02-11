import { SelectChangeEvent } from "@mui/material";
import { useAppDispatch, useAppSelector } from "data";
import { GET_CATEGORY, GET_SUB_CATEGORY, GET_BUSINESS } from "data/selectors";
import { AdminThunk } from "data/thunk/admin.thunk";
import { UserThunk } from "data/thunk/user.thunk";
import { IBusiness, ICategoryData, ISubCategoryData } from "interface";
import Switch from "@mui/material/Switch";
import {
  ChangeEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AdminRoutePathEnum } from "enum";

interface INewlistingControllerReturns {
  getters: {
    headline: string;
    description: string;
    preview: string;
    bodyDescription: string;
    subCategory: string;
    businessName: string;
    category: string;
    businessLocation: string;
    email: string;
    tagLine: string;
    image: any;
    businessData: IBusiness[];
    categoryData: ICategoryData[];
    filteredSubCategory: ISubCategoryData[];
    banner: any;
  };
  handlers: {
    handleHeadlineChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handlePreviewChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleBodyDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleCategoryChange: (event: SelectChangeEvent) => void;
    handleSubCategoryChange: (event: SelectChangeEvent) => void;
    handleBusinessNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleBusinessLocationhange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleTaglineChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleImageChange: (event: {
      target: { files: SetStateAction<any>[] };
    }) => void;
    submitHandler: () => void;
    handleBanner: (event: any) => void;
  };
}

/**
 * Newlisting Controller
 * @return {INewlistingControllerReturns}
 */
export const NewlistingController = (): INewlistingControllerReturns => {
  const [businessName, setBuisnessName] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [tagLine, setTagLine] = useState<string>("");
  const [image, setImage] = useState<any>([]);
  const [subCategory, setSubCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [preview, setPreview] = useState<string>("");
  const [bodyDescription, setBodyDescription] = useState<string>("");

  const [businessLocation, setBusinessLocation] = useState<string>("");
  const categoryData = useAppSelector(GET_CATEGORY);
  const subCategoryData = useAppSelector(GET_SUB_CATEGORY);
  const businessData = useAppSelector(GET_BUSINESS);
  const [banner, setBanner] = useState<any>(false);
  const [editrue, setEditure] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const ListId = searchParams.get("id");
  const edit = searchParams.get("edit");

  useEffect(() => {

    if (edit === 'true') {
      setEditure(true);
      allBusiness();
      const filter = businessData?.filter((item: any) => {
        if (item?.iBusinessId === Number(ListId)) {
          setBuisnessName(item?.vName);
          setBusinessLocation(item?.vLocation);
          setDescription(item?.tDescription);
          setPreview(item?.vPreview);
          setBodyDescription(item?.vBodyDescription);
          setTagLine(item?.vTagLine)
          setImage('http://api.subsip.com:8000/' + item?.vImage)


          if (item?.onBanner == 1) {
            setBanner(true)
          } else {
            setBanner(false)
          }
          setEmail(item?.vEmail);
          setCategory(item?.iCategory);
          setSubCategory(item?.iSubCategory);
        }
      });


    } else {
      navigate(`/admin/listing`)
      setEditure(false);
      setImage(false)
      setBuisnessName("")
      setBusinessLocation("")
      setDescription("");
      setPreview("");
      setBodyDescription('');
      setTagLine("")
      setBanner("")
      setEmail("");
      setCategory("");
      setSubCategory("");

    }
  }, [edit, ListId]);

  const handleHeadlineChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setHeadline(event.target.value as string);
  };

  const handleDescriptionChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setDescription(event.target.value as string);
  };

  const handlePreviewChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPreview(event.target.value as string);
  };


  const handleBodyDescriptionChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setBodyDescription(event.target.value as string);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value as string);
  };

  const handleTaglineChange = (event: SelectChangeEvent): void => {
    setTagLine(event.target.value as string);
  };

  const handleImageChange = (event: {
    target: { files: SetStateAction<any>[] };
  }): void => {
    setImage(event.target.files[0]);
  };

  const handleBanner = (event: any): void => {

    if (event.target.checked) {
      setBanner(true);
    } else {
      setBanner(false);
    }
  };

  const handleCategoryChange = (event: SelectChangeEvent): void => {
    setCategory(event.target.value as string);
  };

  const handleBusinessNameChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setBuisnessName(event.target.value as string);
  };

  const handleSubCategoryChange = (event: SelectChangeEvent): void => {
    setSubCategory(event.target.value as string);
  };

  const handleBusinessLocationhange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setBusinessLocation(event.target.value as string);
  };

  const navigate = useNavigate();

  const submitHandler = async (): Promise<void> => {

    const form = new FormData();
    form.append("name", businessName);
    form.append("latitude", "56789");
    form.append("longitute", "6789");
    form.append("location", businessLocation);
    form.append("description", description);
    form.append("addedBy", "7");
    form.append("status", "Active");
    form.append("type", "Pending");
    form.append("country", "1");
    form.append("state", "2");
    form.append("city", "2");
    form.append("onBanner", banner);
    if (image?.name) {
      form.append("image", image, image?.name)
    }
    form.append("email", email);
    form.append("category", category);
    form.append("subCategory", subCategory);
    form.append("tagLine", tagLine);
    form.append("preview", preview);
    form.append("bodyDescription", bodyDescription);


    const updatedata = new FormData();
    updatedata.append("name", businessName);
    updatedata.append("latitude", "56789");
    updatedata.append("longitute", "6789");
    updatedata.append("location", businessLocation);
    updatedata.append("description", description);
    updatedata.append("addedBy", "7");
    updatedata.append("status", "Active");
    updatedata.append("type", "Pending");
    updatedata.append("country", "1");
    updatedata.append("state", "2");
    updatedata.append("city", "2");
    if (image?.name) {
      updatedata.append("image", image, image?.name)
      updatedata.append("onBanner", banner ? '1' : '0');
    }
    updatedata.append("email", email);
    updatedata.append("category", category);
    updatedata.append("subCategory", subCategory);
    updatedata.append("tagLine", tagLine);
    updatedata.append("preview", preview);
    updatedata.append("bodyDescription", bodyDescription);


    if (ListId) {
      const res = await dispatch(
        AdminThunk.updateListing({
          data: updatedata,
          iBusinessId: ListId
            ? parseInt(ListId)
            : 0,
        })
      );

      toast.success("Listing Updated Successfully");
      navigate(`/admin/listing`)
    } else {
      const res = await dispatch(AdminThunk.createListing(form));
      toast.success("Listing Created Successfully");
      navigate(`/admin/listing`)
    }



    // if (edit) {
    // const res = await dispatch(
    //   AdminThunk.updateListing({
    //     data: updatedata,
    //     iBusinessId: ListId
    //       ? parseInt(ListId)
    //       : 0,
    //   })
    // );
    //   toast.success("Listing Updated Successfully");
    //   navigate(AdminRoutePathEnum.ADMIN_LISTING);
    // } else {
    //   const res = await dispatch(AdminThunk.createListing(form));
    //   toast.success("Listing Created Successfully");
    //   navigate(AdminRoutePathEnum.ADMIN_LISTING);
    // }

  };

  const allBusiness = useCallback(async () => {
    try {
      await dispatch(UserThunk.business());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    allBusiness();
  }, [allBusiness]);

  const getcategory = useCallback(async () => {
    try {
      await dispatch(AdminThunk.getCategory());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getcategory();
  }, [getcategory]);



  const getSubCategory = useCallback(async () => {
    try {
      await dispatch(AdminThunk.getSubCategory());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getSubCategory();
  }, [getSubCategory]);

  const filteredSubCategory = subCategoryData?.filter(
    (item: { iCategoryId: string }) => {
      return item.iCategoryId == category;
    }
  );

  console.log(subCategoryData?.filter((item: { iCategoryId: string }) => {
    return item.iCategoryId == category;
  }), 'item cate sub')



  return {
    getters: {
      headline,
      description,
      preview,
      bodyDescription,
      subCategory,
      businessName,
      category,
      businessLocation,
      email,
      tagLine,
      businessData,
      categoryData,
      filteredSubCategory,
      image,
      banner,
    },
    handlers: {
      handleHeadlineChange,
      submitHandler,
      handleDescriptionChange,
      handlePreviewChange,
      handleBodyDescriptionChange,
      handleCategoryChange,
      handleSubCategoryChange,
      handleBusinessNameChange,
      handleBusinessLocationhange,
      handleEmailChange,
      handleTaglineChange,
      handleImageChange,
      handleBanner,
    },
  };
};
