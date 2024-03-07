FROM fukamachi/sbcl:2.4.1-alpine

WORKDIR /app

COPY quicklisp.lisp .

RUN sbcl --load quicklisp.lisp --eval '(quicklisp-quickstart:install)' --eval '(ql:quickload "hunchentoot")'

COPY . .

ENTRYPOINT ["sbcl", "--noinform", "--load", "main.lisp"]

