(quicklisp:quickload :hunchentoot)

(hunchentoot:start (make-instance 'hunchentoot:easy-acceptor :port 4242))

(hunchentoot:define-easy-handler (say-yo :uri "/yo") (name)
  (setf (hunchentoot:content-type*) "text/plain")
  (format nil "Hey~@[ ~A~]!" name))

(defun compute-levenshtein (a b)
  (random 100))

(hunchentoot:define-easy-handler (levenshtein :uri "/levenshtein") (a b)
    (setf (hunchentoot:content-type*) "text/plain")
    (format nil "~A" (compute-levenshtein a b)))
