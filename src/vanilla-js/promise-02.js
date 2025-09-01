const object = {
  name: 'object name',
  returnPromise: function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolve');
      }, 3000);
      // reject(new Error('Error roi huhu!'));
    });
  }
}

const validateBeforeCreate = async () => {
  const result = await object.returnPromise();
  console.log('🐦‍🔥 ~ validateBeforeCreate ~ result:', result)
  console.log('🐦‍🔥 ~ validateBeforeCreate ~ result:', typeof result)
  return result;
}

const createNew = async () => {
  try {
    const validData = await validateBeforeCreate()
    console.log('🐦‍🔥 ~ createNew ~ validData:', validData)
    return validData
  } catch (error) { throw new Error(error) }
}

createNew();