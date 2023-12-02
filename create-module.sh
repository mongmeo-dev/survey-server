if [ ${1} == "" ]
then
  echo "Module name not provided"
  return 1
fi

nest g mo ${1}
mkdir -p src/${1}/entity
mkdir -p src/${1}/application/dto
mkdir -p src/${1}/application/usecase/query
mkdir -p src/${1}/application/usecase/command
mkdir -p src/${1}/application/repository/query
mkdir -p src/${1}/application/repository/command
mkdir -p src/${1}/service/query
mkdir -p src/${1}/service/command
mkdir -p src/${1}/infra/repository/query
mkdir -p src/${1}/infra/repository/command