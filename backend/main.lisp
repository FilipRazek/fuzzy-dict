(push :hunchentoot-no-ssl *features*)
(quicklisp:quickload :hunchentoot)

(load "../lev/package.lisp")
(load "../lev/compute.lisp")

(hunchentoot:start (make-instance 'hunchentoot:easy-acceptor :port 4242))

(hunchentoot:define-easy-handler (handle-levenshtein :uri "/levenshtein") (a b)
    (setf (hunchentoot:content-type*) "text/plain")
    (format nil "~A" (compute:levenshtein a b)))
