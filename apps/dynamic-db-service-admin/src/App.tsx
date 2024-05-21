import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TableList } from "./table/TableList";
import { TableCreate } from "./table/TableCreate";
import { TableEdit } from "./table/TableEdit";
import { TableShow } from "./table/TableShow";
import { ColumnList } from "./column/ColumnList";
import { ColumnCreate } from "./column/ColumnCreate";
import { ColumnEdit } from "./column/ColumnEdit";
import { ColumnShow } from "./column/ColumnShow";
import { RelationList } from "./relation/RelationList";
import { RelationCreate } from "./relation/RelationCreate";
import { RelationEdit } from "./relation/RelationEdit";
import { RelationShow } from "./relation/RelationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DynamicDBService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Table"
          list={TableList}
          edit={TableEdit}
          create={TableCreate}
          show={TableShow}
        />
        <Resource
          name="Column"
          list={ColumnList}
          edit={ColumnEdit}
          create={ColumnCreate}
          show={ColumnShow}
        />
        <Resource
          name="Relation"
          list={RelationList}
          edit={RelationEdit}
          create={RelationCreate}
          show={RelationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
