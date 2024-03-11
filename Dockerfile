FROM fukamachi/sbcl:2.4.1-alpine

WORKDIR /app

RUN mkdir backend

COPY backend/quicklisp.lisp quicklisp.lisp

RUN sbcl --load quicklisp.lisp --eval '(quicklisp-quickstart:install)'

COPY backend/ .

RUN mkdir lev
COPY lev/ lev/

ENTRYPOINT ["sbcl", "--noinform", "--load", "main.lisp"]

