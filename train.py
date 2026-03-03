import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LogisticRegression

df=pd.read_csv('titanic.csv')
print("---raw datat---")
print(df.head())
print(df.columns)

print(df.isnull().sum())
df=df.dropna()
le=LabelEncoder()
df['Survived']=le.fit_transform(df['Survived'])
print("---cleaned data---")
print(df.head())
x=df.drop('PassengerId',axis=1)
y=df['Survived']
print(x.shape)
print(y.shape)
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=42)
print("training data size",x_train.shape)
print("testing data size",x_test.shape)
model=LogisticRegression()
model.fit(x_train,y_train)
print("model training completed")
predictions=model.predict(x_test)
from sklearn.metrics import accuracy_score,mean_squared_error
print("accuracy score:",accuracy_score(y_test,predictions))