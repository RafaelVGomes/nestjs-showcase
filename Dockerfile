FROM postgres

# /var/lib/postgresql/data - map volume

ENV POSTGRES_PASSWORD test
ENV POSTGRES_USER test
ENV POSTGRES_DB test

EXPOSE 5432