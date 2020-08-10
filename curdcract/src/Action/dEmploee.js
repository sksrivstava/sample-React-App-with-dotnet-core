import api from "./api";

export const ACTION_TYPE = {
  create: "CREATE",
  update: "UPDATE",
  fetch_all: "FETCH_ALL",
  delete: "DELETE",
};

const formatData = (data) => ({
  ...data,
  age: parseInt(data.age ? data.age : 0),
});

export const fetchall = () => (dispatch) => {
  api
    .dEmployee()
    .fetchall()
    .then((Response) => {
      dispatch({
        type: ACTION_TYPE.fetch_all,
        actplay: Response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const create = (data, onSuccess) => (dispatch) => {
  data = formatData(data);
  api
    .dEmployee()
    .create(data)
    .then((Response) => {
      dispatch({
        type: ACTION_TYPE.create,
        actplay: Response.data,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const update = (EmpId, data, onSuccess) => (dispatch) => {
  data = formatData(data);
  api
    .dEmployee()
    .update(EmpId, data)
    .then((Response) => {
      dispatch({
        type: ACTION_TYPE.update,
        actplay: { EmpId, ...data },
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};

export const Delete = (EmpId, onSuccess) => (dispatch) => {
  api
    .dEmployee()
    .delete(EmpId)
    .then((Response) => {
      dispatch({
        type: ACTION_TYPE.delete,
        actplay: EmpId,
      });
      onSuccess();
    })
    .catch((err) => console.log(err));
};
/* export const create = todo => {
    return (
       { type : "create",
        actplay: data
    }
    )
}

//dispatch (create {fullname:""}) */
