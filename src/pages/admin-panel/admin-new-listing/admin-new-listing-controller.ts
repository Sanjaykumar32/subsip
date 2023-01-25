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
  const [banner, setBanner] = useState<string>("false");
  const [editrue, setEditure] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const ListId = searchParams.get("id");
  const edit = searchParams.get("edit");




  console.log(businessData, 'editScreen')

  useEffect(() => {
    if (edit) {
      console.log('Edit new listinng');

      setEditure(true);
      allBusiness();



      const filter = businessData?.filter((item) => {
        if (item?.iBusinessId === Number(ListId)) {
          console.log(item, "item");
          // item
          setBuisnessName(item?.vName);
          setBusinessLocation(item?.vLocation);
          setDescription(item?.tDescription);
          setPreview(item?.vPreview);
          setBodyDescription(item?.vBodyDescription);
          setTagLine(item?.vTagLine)


          if (item.onBanner == 1) {
            setBanner("true")
            console.log(item.onBanner, "item.onBanner true");
          } else {
            setBanner("false")
            console.log(item.onBanner, "item.onBanner false");
          }
          // setBanner(item.onBanner === 1 ? "true" : "false")
          setEmail(item?.vEmail);
          // console.log(item?.iCountry)
          setCategory(item?.iCategory);
          setSubCategory(item?.iSubCategory);
        }
      });
    }else{
      navigate(`/admin/new-listing`)
      setEditure(false);
      console.log('add new listinng');
      console.log('add new listinng')

      // const clear = {
        setBuisnessName("")
          setBusinessLocation("")
          setDescription("");
          setPreview("");
          setBodyDescription('');
          setTagLine("")
          setBanner("")
          // setBanner(item.onBanner === 1 ? "true" : "false")
          setEmail("");
          // console.log(item?.iCountry)
          setCategory("");
          setSubCategory("");
      // }

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
    setBanner(event.target.checked);
    console.log(event.target.checked + " select category data");
  };

  const handleCategoryChange = (event: SelectChangeEvent): void => {
    // setCategory(event.target.value as string);
    setCategory(event.target.value as string);

    // console.log(event.target.value)
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
    form.append("image", image, image?.name);
    form.append("email", email);
    form.append("category", category);
    form.append("subCategory", subCategory);
    form.append("tagLine", tagLine);
    form.append("preview", preview);
    form.append("bodyDescription", bodyDescription);

    // form
    // console.log(form, 'form data on edit')

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
    updatedata.append("onBanner", banner ? "1" : '0');
    updatedata.append("image", image, image?.name);
    updatedata.append("email", email);
    updatedata.append("category", category);
    updatedata.append("subCategory", subCategory);
    updatedata.append("tagLine", tagLine);
    updatedata.append("preview", preview);
    updatedata.append("bodyDescription", bodyDescription);


    if (editrue == true) {
      const res = await dispatch(
        AdminThunk.updateListing({
          data: updatedata,
          iBusinessId: ListId
            ? parseInt(ListId)
            : 0,
        })
      );
      toast.success("Listing Updated Successfully");
    } else {
      const res = await dispatch(AdminThunk.createListing(form));
      toast.success("Listing Created Successfully");
    }

    navigate(AdminRoutePathEnum.ADMIN_LISTING);

    // const res = await dispatch(AdminThunk.createListing(form));
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
