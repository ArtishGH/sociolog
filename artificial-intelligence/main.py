import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

def generate_plot(df, column_name, output_filename, ylim_min, ylim_max):
    df_train = pd.DataFrame({"x": df.index.values, "y": df[column_name].values})
    df_train["y"] = df_train["y"].map(lambda x: float(x.replace(" ", "").replace(",", ".")) if isinstance(x, str) else x)
    lr = LinearRegression()
    lr = lr.fit(df_train[["x"]], df_train["y"])

    df_test = pd.DataFrame({"x": [n for n in range(df_train.shape[0], df_train.shape[0] + 200)]})
    df_test["y"] = lr.predict(df_test["x"].values.reshape(-1, 1))

    df_concat = pd.concat([df_train, df_test], ignore_index=True)
    df_concat[["y"]].plot(legend=False, color="#206975")

    plt.xlim(0, 25)
    plt.ylim(ylim_min, ylim_max)

    plt.savefig(output_filename)
    plt.close()

df = pd.read_csv('data.csv', sep=";")

generate_plot(df, "Depresja", "depresja.png", 600000, 800000)
generate_plot(df, "Autyzm", "autyzm.png", 10000, 100000)
generate_plot(df, "Asperger", "asperger.png", 5000, 75000)
