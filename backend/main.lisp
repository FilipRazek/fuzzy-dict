(push :hunchentoot-no-ssl *features*)
(quicklisp:quickload :hunchentoot)

(load "lev/package.lisp")
(load "lev/compute.lisp")

(hunchentoot:define-easy-handler (handle-levenshtein :uri "/levenshtein") (a b)
    (setf (hunchentoot:content-type*) "application/json")
    (setf (hunchentoot:header-out :Access-Control-Allow-Origin hunchentoot:*reply*) "https://levenshtein-comparator-frontend.onrender.com")
    (format nil "{\"distance\": ~A}" (compute:levenshtein a b)))

(hunchentoot:start (make-instance 'hunchentoot:easy-acceptor :port 4242 :document-root "/dev/null"))

(handler-case
  (let ((server-thread (find-if (lambda
                                  (th)
                                  (search "hunchentoot" (bt:thread-name th)))
                                (bt:all-threads))))
    (bt:join-thread server-thread))
    (error (c) (format t "Woops, an unknown error occured:~&~a~&" c)))

