docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dokumentooborot7-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t dokumentooborot7-java/app ../../..
