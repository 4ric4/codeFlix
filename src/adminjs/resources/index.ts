
import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../../models";
import { categoryResourceOptions } from "./category";
import { courseResourceFeatures, courseResourceOptions } from "./course";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";
import { features } from "process";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions,
    features: courseResourceFeatures
  },
  {
    resource: Category,
    options: categoryResourceOptions
  },
  {
    resource:Episode,
    options: episodeResourceOptions,
    features: episodeResourceFeatures
  },
]
