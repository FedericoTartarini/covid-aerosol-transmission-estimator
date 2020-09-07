import pandas as pd
import os
from pprint import pprint
import json
import numpy as np

cwd = os.getcwd()

df = pd.read_csv(os.path.join(cwd, "python", "./CovidToolLUT - Sheet1.csv"))

output_dict = {}

age_groups = ["16 - 20",
              "21 - 30",
              "31 - 40",
              "41 - 50",
              "51 - 60",
              "61 - 70",
              "71 - 80",
              ]

[x.split(" - ") for x in age_groups]

for age in df["AgeGrp"].unique():
    # age_group = ""
    # for ix, boundaries in enumerate([x.split(" - ") for x in age_groups]):
    #     if int(boundaries[0]) < age < int(boundaries[1]):
    #         age_group = age_groups[ix]
    #     elif age > int(boundaries[1]):
    #         age_group = "80 and above"
    # print(age_group, age)

    # output_dict[age_group] = {}
    output_dict[age] = {}
    for activity in df["Activity"].unique():
        _ = df[(df["AgeGrp"] == age) & (df["Activity"] == activity)]

        output_dict[age][activity] = _[_.columns[-3:]].replace({np.nan:""}).to_dict(orient="records")[0]

# pprint(output_dict)

save_dir = os.path.join(os.getcwd(), "src", "Data", "quanta_resp_data.json")

with open(save_dir, "w") as fp:
    json.dump(output_dict, fp)

print("data correctly downloaded")
